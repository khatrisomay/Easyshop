pipeline {
    agent any

    environment {
        ECR_REPO = '642533326238.dkr.ecr.eu-north-1.amazonaws.com/minorproject'
        AWS_REGION = 'eu-north-1'
        DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t minorproject .'
            }
        }

        stage('Push to ECR') {
            steps {
                bat "aws ecr get-login-password --region %AWS_REGION% | docker login --username AWS --password-stdin %ECR_REPO%"
                bat "docker tag minorproject:latest %ECR_REPO%:%DOCKER_IMAGE_TAG%"
                bat "docker tag minorproject:latest %ECR_REPO%:latest"
                bat "docker push %ECR_REPO%:%DOCKER_IMAGE_TAG%"
                bat "docker push %ECR_REPO%:latest"
            }
        }

        stage('Terraform Init') {
            steps {
                dir('EasyShop-Ecommerce') {
                    bat 'terraform init'
                }
            }
        }

        stage('Terraform Apply') {
            steps {
                dir('EasyShop-Ecommerce') {
                    bat 'terraform apply --auto-approve'
                }
            }
        }
    }

    post {
        always {
            bat 'docker system prune -f'
        }
    }
}
