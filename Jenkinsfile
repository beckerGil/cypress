pipeline {
    agent {
        docker { image 'cypress/base:10' }
    }

    environment  {
        HOME = '.'
        CYPRESS_RUN_BINARY = '/var/lib/jenkins/workspace/cypress_master/node_modules/cypress/'
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker inspect'
                echo "'node --version'"
                sh 'node --version'
                sh 'docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:6.2.1 info'
                // echo "sh 'cypress run -h'"
                // sh 'cypress run -h'
                // sh 'npm ci'
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