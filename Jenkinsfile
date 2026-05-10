pipeline {
    agent any

    environment {
        DOCKER_HUB = "01prince"
        FRONTEND_IMAGE = "cloudops-frontend"
        BACKEND_IMAGE = "cloudops-backend"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Pverma-1234/CloudOps-AI-Dashboard.git'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $DOCKER_HUB/$FRONTEND_IMAGE:latest ./frontend'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $DOCKER_HUB/$BACKEND_IMAGE:latest ./backend'
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh 'docker push $DOCKER_HUB/$FRONTEND_IMAGE:latest'
            }
        }

        stage('Push Backend Image') {
            steps {
                sh 'docker push $DOCKER_HUB/$BACKEND_IMAGE:latest'
            }
        }
    }
}