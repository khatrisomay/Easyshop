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
                        def ipOutput = bat(
                            script: 'terraform output -raw instance_public_ip',
                            returnStdout: true
                        ).trim()
                        echo "✅ Your app is running at: http://${ipOutput}:5173"
                    }
                }
            }
        }
    }

    post {
        success {
            echo "🎉 Terraform applied successfully! Your infrastructure is ready."
        }
        failure {
            echo "❌ Build failed. Check the logs for details."
        }
        always {
            echo "🧹 Cleaning up temporary files..."
        }
    }
}
