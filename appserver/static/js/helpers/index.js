define([], function() {
    function get_today_date(locale="en-US") {
        var obj_date = new Date();
        var day = obj_date.toLocaleDateString(locale, {day: "numeric"});
        var month = obj_date.toLocaleDateString(locale, {month: "long"});
        var year = obj_date.toLocaleDateString(locale, {year: "numeric"});
        var output = `${day} ${month} ${year}`;
        return output;
    }

    async function digest_message(str,algorithm="SHA-512") {
        const encoder_new = new TextEncoder("utf-8");
        const str_encoded = encoder_new.encode(str);
        const hash = await window.crypto.subtle.digest(algorithm, str_encoded);
        return hash;
    }

    function uniquefy(arr) {
        const obj_json = arr.map(JSON.stringify(arr));
        const set_new = new Set(obj_json);
        const arr_new = Array.from(set_new).map(JSON.parse);
        return arr_new;
    }

    return {
        get_today_date: get_today_date,
        sha512: sha512,
        uniquefy: uniquefy
    };
});