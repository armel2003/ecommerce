pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/armel2003/Pro-Ecommerce.git'
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
