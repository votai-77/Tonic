pipeline{
    agent any
    eviroment{
        REPO_NAME: 'Tonic'
        FILE_SH: 'TN_Auto.sh'
        FILE_BAT: 'TN_Auto.bat'
        BRANCH_NAME: 'master'
    }
    stages{
        stage('CI: Checkout Code')
        {
            steps{
                script{
                    bat "git checkout master" //checkout code nhánh master
                    bat "git remote set-head origin master" //chỉ định nhánh chính
                    bat "git status"
                    bat "git remote -v"
                    bat "git branch -r"

                }
            }
        }
        stages('Setup Dependencies')
        stage('Run Tests')
        {
            steps{
                script{

                }
            }
        }
    }
}
