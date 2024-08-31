document.addEventListener('DOMContentLoaded', function(){

    function handleNavigation(validateFunction, targetPage){
        if (validateFunction()) {
            window.location.href = targetPage;
        }
    }

    const backButton = document.getElementById('back')
    if(backButton){
        backButton.onclick = function getPreviousPage(){
            window.history.back()
        }
    }

    const menuButton = document.getElementById('menu')
    if (menuButton){
        menuButton.onclick = function getMenu(){
            window.location.href = 'index.html'
        }
    }

    const tasksButton = document.getElementById('tasks')
    if (tasksButton){
        tasksButton.onclick = function getTasks(){
            window.location.href = 'tasks.html'
        }
    }

    const settingsButton = document.getElementById('settings')
    if(settingsButton){
        settingsButton.onclick = function getSettings(){
            window.location.href = 'settings.html'
        }
    }

    const accountingButton = document.getElementById('accounting')
    if (accountingButton){
        accountingButton.onclick = function getAccounting(){
            window.location.href = 'accounting.html'
        }
    }

    const filterButton = document.getElementById('filter')
    if (filterButton){
        filterButton.onclick = function getFilter(){
            window.location.href = 'filter.html'
        }
    }

    const searchButton = document.getElementById('list')
    if (searchButton){
        searchButton.onclick = function getList(){
           handleNavigation(validateForm,'listVZN.html')
        }
    }
})
