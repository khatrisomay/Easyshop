# TODO for Terraform Deployment of EasyShop Ecommerce on EC2

- [x] Build the Docker image locally: `docker build -t minorproject .`
- [x] Tag the image for ECR: `docker tag minorproject:latest 642533326238.dkr.ecr.eu-north-1.amazonaws.com/minorproject:latest`
- [x] Login to ECR: `aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 642533326238.dkr.ecr.eu-north-1.amazonaws.com` (Note: AWS CLI not installed locally; will be handled in EC2 user_data)
- [ ] Push the image to ECR: `docker push 642533326238.dkr.ecr.eu-north-1.amazonaws.com/minorproject:latest` (Requires ECR login first)
- [x] Create main.tf with Terraform configuration for EC2 instance
- [x] Run `terraform init` in the directory containing main.tf
- [x] Run `terraform plan` to review the changes
- [x] Run `terraform apply` to provision the EC2 instance and deploy the container
- [ ] Verify the application is running by accessing the EC2 public IP on port 5173 (image not found in ECR, need to push first)
- [ ] Clean up resources with `terraform destroy` when done

# Jenkins Pipeline TODO
- [x] Create Jenkinsfile for automated CI/CD pipeline
- [ ] Configure Jenkins with AWS credentials and Docker
  - Install Jenkins on a server or use a cloud instance
  - Install required plugins: Docker Pipeline, AWS Credentials, Terraform
  - Install Docker, AWS CLI, and Terraform on the Jenkins agent
  - Add AWS credentials in Jenkins: Go to Manage Jenkins > Manage Credentials > Add AWS access key and secret key as 'aws-credentials'
  - Configure environment variables in Jenkins pipeline or global properties for AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
  - Ensure the Jenkins agent has access to Docker daemon and AWS permissions for ECR and EC2
- [ ] Run the Jenkins pipeline to automate the deployment process
