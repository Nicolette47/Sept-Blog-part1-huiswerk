
function dateformatChange (dateString) {
    const blogDate = new Date(dateString);

    const shortOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };


    return blogDate.toLocaleDateString('nl-NL',shortOptions);
}

export default dateformatChange;
