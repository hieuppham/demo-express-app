pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'node_18_18_1') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        // stage('Curl') {
        //     steps {
        //         sh 'docker rmi -f '
        //     }
        // }
    }
}

