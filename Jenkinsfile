pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID     = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        AWS_DEFAULT_REGION     = 'eu-north-1'
    }

    stages {
        stage('Check AWS Access') {
            steps {
                bat 'aws sts get-caller-identity'
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
                    bat 'terraform apply -auto-approve'
                }
            }
        }

        stage('Output Instance IP') {
            steps {
                dir('EasyShop-Ecommerce') {
                    script {
                        def ip = sh(script: 'terraform output instance_public_ip', returnStdout: true).trim()
                        echo "Your app is running at http://${ip}:5173"
                    }
                }
            }
        }
    }
}
