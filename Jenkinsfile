pipeline {
    agent {
        docker { image 'cypress/base:12.16.1' }
    }

    environment  {
        HOME = '.'
    }

    stages {
        stage('Build') {
            steps {
                echo "'node --version'"
                sh 'node --version'
                // echo "sh 'cypress run -h'"
                // sh 'cypress run -h'
                echo CYPRESS_CACHE_FOLDER
                sh 'npm ci'
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