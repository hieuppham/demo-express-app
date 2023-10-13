pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t demo-express-app:${BUILD_NUMBER} .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker rm -f docker-express-app'
                sh 'docker run -d --name demo-express-app -p 8099:8099 demo-express-app:${BUILD_NUMBER}'
            }
        }

        stage('Health check') {
            steps {
                sh 'curl localhost:8099'
            }
        }
    }
}

