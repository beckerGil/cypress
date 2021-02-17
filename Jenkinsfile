pipeline {
    agent {
        docker { image 'cypress/included:6.3.0' }
    }

    environment  {
        HOME = '.'
    }

    stages {
        stage('Test') {
            steps {
                echo "'node --version'"
                sh 'node --version'
                echo "sh 'cypress run -h'"
                sh 'cypress run -h'
                // echo "get Electron appData path"
                // sh 'rm -f /e2e/cypress-cache/6.3.0/Cypress/resources/electron.asar'
                // sh 'custom-electron-version/electron.asar /e2e/cypress-cache/6.3.0/Cypress/resources/'
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
    }
}