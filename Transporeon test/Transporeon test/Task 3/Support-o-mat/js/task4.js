    let link = window.location.href

    if(confirm('Do you want to get rid of the ads?')){

    let newLink = link.split("com").join("com.")
    
    window.location.replace(newLink);
    }
    