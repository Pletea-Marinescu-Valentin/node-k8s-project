# Node.js Application with Kubernetes

This project demonstrates how to deploy a basic Node.js application using Kubernetes (Minikube) locally. The application is containerized using Docker, and Kubernetes is used for orchestration and scaling.

## Requirements

- [Minikube](https://minikube.sigs.k8s.io/docs/) - A tool to run Kubernetes clusters locally.
- [Docker](https://www.docker.com/) - Containerization tool for building images.
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) - Command-line tool to interact with Kubernetes clusters.
- [Node.js](https://nodejs.org/) - JavaScript runtime used for the application.

## Setup

### Install Dependencies

1. Install **Minikube**, **Docker**, and **kubectl** as per the installation instructions on their respective websites.
2. Make sure **Minikube** and **Docker** are running properly by checking their status.

### Clone the Repository

```bash
git clone https://github.com/Pletea-Marinescu-Valentin/node-k8s-project.git
cd your-repository-name
```

### Step 3: Start Minikube
Start Minikube with the following command:

```bash
minikube start
```

### Set up Docker Environment in Minikube
Configure your local Docker environment to use Minikube's Docker daemon:

```bash
minikube docker-env
```

Follow the instructions shown in the terminal to set up your environment. If you're using PowerShell, run the following command:

```bash
& minikube docker-env | Invoke-Expression
```

### Build the Docker Image
Build the Docker image for your application:

```bash
docker build -t node-app .
```

### Deploy to Kubernetes
Deploy the application to your local Minikube Kubernetes cluster:

```bash
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

### Access the Application
To access the Node.js application through the browser:

```bash
minikube service node-app-service
```

This command will provide you with the URL of the running application.
