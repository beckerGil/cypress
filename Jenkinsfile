pipeline {
    agent {
        docker { image 'cypress/included:6.3.0' }
    }

    enviroment {
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
                sh 'npx cypress run -b chrome --record -k 03b6e3df-6cb4-4c90-8c7a-f882fe169007'
            }
        }
    }
}