cosnt LoadDate = async () {
    try {
        const url1 = '';
        const url2 = '';
        const url3 = '';

        const results = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3),
        ]);
        const finalData = await Promise.all(results.map(result => result.json()));
    } catch (error) {
        console.log(error);
    }
}

( async () {
    const data = await LoadDate();
    console.log(data);
})();