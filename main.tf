terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-north-1"
}

# ---------------------------------------------
# IAM Role for EC2 (so it can pull from ECR)
# ---------------------------------------------
resource "aws_iam_role" "ec2_role" {
  name = "ec2-ecr-access-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com"
      }
      Action = "sts:AssumeRole"
    }]
  })
}

# Attach AmazonEC2ContainerRegistryReadOnly policy to role
resource "aws_iam_role_policy_attachment" "ecr_read_access" {
  role       = aws_iam_role.ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

# Create instance profile for the EC2 role
resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "ec2-instance-profile-ecommerce"
  role = aws_iam_role.ec2_role.name
}


# ---------------------------------------------
# Security Group
# ---------------------------------------------
resource "aws_security_group" "ecommerce_sg" {
  name_prefix = "ecommerce-sg-"

  ingress {
    description = "SSH Access"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "App Port 5173"
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ---------------------------------------------
# EC2 Instance
# ---------------------------------------------
resource "aws_instance" "ecommerce_ec2" {
  ami                    = "ami-01fd6fa49060e89a6" # Ubuntu 22.04 LTS
  instance_type          = "t3.micro"
  key_name               = "minorproject"
  security_groups        = [aws_security_group.ecommerce_sg.name]
  iam_instance_profile   = aws_iam_instance_profile.ec2_instance_profile.name

  user_data = <<-EOF
    #!/bin/bash
    apt update -y
    apt install -y docker.io awscli
    systemctl start docker
    systemctl enable docker
    usermod -aG docker ubuntu

    # Wait for Docker to start fully
    sleep 10

    # Login to ECR and pull image
    ECR_URL=642533326238.dkr.ecr.eu-north-1.amazonaws.com/minorproject
    aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin $ECR_URL

    docker pull $ECR_URL:latest
    docker run -d -p 5173:5173 $ECR_URL:latest
  EOF

  tags = {
    Name = "EasyShop-Ecommerce"
  }
}

# ---------------------------------------------
# Output
# ---------------------------------------------
output "instance_public_ip" {
  value = aws_instance.ecommerce_ec2.public_ip
}
