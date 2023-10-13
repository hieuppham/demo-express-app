pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'node_18_18_1') {
                    sh 'npm install'
                    sh 'npm run build'
                }
                sh 'docker build -t demo-express-app:${BUILD_NUMBER} .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker rm -f demo-express-app'
                sh 'docker run -d --name demo-express-app -p 8099:8099 demo-express-app:${BUILD_NUMBER}'
            }
        }

        stage('Health check') {
            steps {
                retry(10) {
                    sleep 15
                    sh 'curl --fail --silent -i localhost:8099/not_found | grep "200 OK" || exit 1'
                }
            }
        }
    }
}

