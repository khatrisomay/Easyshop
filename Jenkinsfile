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
                script {
                    sh 'docker build -t minorproject .'
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    sh "aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}"
                    sh "docker tag minorproject:latest ${ECR_REPO}:${DOCKER_IMAGE_TAG}"
                    sh "docker tag minorproject:latest ${ECR_REPO}:latest"
                    sh "docker push ${ECR_REPO}:${DOCKER_IMAGE_TAG}"
                    sh "docker push ${ECR_REPO}:latest"
                }
            }
        }

        stage('Terraform Init') {
            steps {
                dir('EasyShop-Ecommerce') {
                    sh 'terraform init'
                }
            }
        }

        stage('Terraform Apply') {
            steps {
                dir('EasyShop-Ecommerce') {
                    sh 'terraform apply --auto-approve'
                }
            }
        }

        stage('Get Instance IP') {
            steps {
                dir('EasyShop-Ecommerce') {
                    script {
                        def ip = sh(script: 'terraform output instance_public_ip', returnStdout: true).trim()
                        echo "Application is running at http://${ip}:5173"
                    }
                }
            }
        }
    }

    post {
        always {
            sh 'docker system prune -f'
        }
        failure {
            dir('EasyShop-Ecommerce') {
                sh 'terraform destroy --auto-approve || true'
            }
        }
    }
}
