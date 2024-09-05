pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'master', url: 'https://github.com/armel2003/ecommerce.git'
            }
        }
        stage('Build') {
            steps {
		        sh '''
                    npm install
                    npm run build
                '''
            }
        }
    }
}
