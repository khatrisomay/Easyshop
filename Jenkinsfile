pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-north-1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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

        stage('Get Instance IP') {
            steps {
                dir('EasyShop-Ecommerce') {
                    script {
                        def ip = bat(script: 'terraform output -raw instance_public_ip', returnStdout: true).trim()
                        echo "🚀 Application deployed successfully!"
                        echo "🌍 Access your app here → http://${ip}:5173"
                    }
                }
            }
        }

        stage('Cleanup Docker') {
            steps {
                echo '🧹 Cleaning up unused Docker resources...'
                bat 'docker system prune -a -f --volumes'
            }
        }
    }

    post {
        always {
            echo '🧽 Final cleanup step to ensure no leftovers...'
            bat 'docker system prune -f'
        }
        failure {
            echo '⚠️ Build failed — destroying Terraform resources...'
            dir('EasyShop-Ecommerce') {
                bat 'terraform destroy -auto-approve || exit 0'
            }
        }
    }
}
