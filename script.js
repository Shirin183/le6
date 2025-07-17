function run() {
    async function getLocation() {
        try {
            let getDate = await fetch('https://ipinfo.io/json')
            let result = await getDate.json()
            console.log(result);
            let loclet = result.loc.split(',')

        } catch (e) {
            console.error('xatolik' + e);

        } finally {
            console.log('malumot ishladi yoki keldi');
        }

    }

    getLocation()
}

