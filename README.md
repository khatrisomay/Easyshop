🛍️ EasyShop E-Commerce Platform
A fully automated, scalable, and resilient e-commerce application demonstrating proficiency in DevOps practices, the MERN Stack, and Cloud Infrastructure Management.

This project showcases an end-to-end CI/CD pipeline, containerization, and Infrastructure as Code (IaC) deployment to Amazon Web Services (AWS).

✨ Project Highlights
Infrastructure as Code (IaC): Deployed and managed entire AWS infrastructure using Terraform.

Containerization: Application and database environments are standardized using Docker.

CI/CD Pipeline: Automated build, test, and deployment workflow managed by Jenkins.

Cloud Hosting: Leveraged key AWS services (EC2, ECR) for secure and scalable hosting.


Shutterstock
Technology Stack: Built with the MERN stack (MongoDB,  React.js, Node.js).

💻 Tech Stack & Tools
Cloud & DevOps
Category	Tool / Service	Description
Infrastructure	Terraform	Provisioned all required AWS resources (VPC, Security Groups, EC2, etc.).
CI/CD	Jenkins	Orchestrated the complete automation pipeline (build, push, deploy).
Containerization	Docker	Encapsulated the application and its dependencies for consistent environments.
Orchestration	Kubernetes	(Basic configuration) Used for container management and load balancing.
Version Control	Git/GitHub	Source code management and triggering the Jenkins pipeline.
Cloud Platform	AWS	Primary hosting environment (EC2, ECR, S3, IAM).

Application (MERN Stack)
Frontend: React.js / Next.js (for a modern, responsive user interface).

Backend: Node.js & Express.js (for RESTful APIs).

Database: MongoDB (NoSQL database).

Authentication: JWT / OAuth.

🚀 DevOps Implementation Details
1. Infrastructure Provisioning with Terraform
All necessary AWS components were defined in Terraform configuration files (.tf).

VPC & Networking: Created a custom VPC, subnets, and security groups.

EC2 Instance: Provisioned an EC2 instance to host the Jenkins server and run the application containers.

Storage: Configured S3 for static assets and artifact storage.

IAM: Managed roles and policies for secure access between AWS services (e.g., Jenkins access to ECR).

2. Containerization
A Dockerfile was created to package the application, ensuring it runs identically across local development and the AWS environment.

The built Docker image is pushed to AWS Elastic Container Registry (ECR) for central storage.

3. CI/CD Pipeline (Jenkins)
The Jenkins pipeline is defined using a Jenkinsfile (Pipeline as Code) and follows these automated stages:

Checkout: Pulls the latest code from the GitHub repository.

Build: Builds the Docker image for the application.

Test: Runs unit and integration tests (if applicable).

Push: Tags the Docker image and pushes it to AWS ECR.

Deploy: Connects to the target EC2 instance and pulls the latest image from ECR. The application is then deployed/updated using Kubernetes manifests or a simple Docker command.

⚙️ Setup and Deployment
Prerequisites
AWS Account

Terraform CLI

Docker

Jenkins Server (or access to one)

Local Setup
Bash

# Clone the repository
git clone 
cd easy-shop
AWS Deployment (Via Terraform)
Initialize the Terraform workspace:

Bash

terraform init
Review the execution plan:

Bash

terraform plan
Apply the changes to provision the infrastructure:

Bash

terraform apply
The output will provide the public IP/DNS of the provisioned EC2 instance where Jenkins and the application will reside.

Pipeline Execution
Access the Jenkins Dashboard.

Configure a new pipeline job pointing to this GitHub repository.

Run the pipeline. Jenkins will automatically handle the build, image push to ECR, and final deployment to the AWS host.
