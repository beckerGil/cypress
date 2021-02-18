pipeline {
    agent {
        docker { image 'cypress/base:12.16.1' }
    }

    environment  {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Build') {
            steps {
                echo "'node --version'"
                sh 'node --version'
                // echo "sh 'cypress run -h'"
                // sh 'cypress run -h'
                sh 'npm ci'
                // sh 'npm install cypress'
                sh 'npx cypress run'
                // sh 'npm run node_module\\.bin\\cypress verify'
            }
        }

        stage('Test'){
            steps{
                sh 'npx cypress run'
            }
        }
    }
}