$(document).ready(function () {

    $.getJSON("fiction.json", function (data) {
        let fiction_data = '';

        $.each(data, function (key, value) {
            fiction_data += '<tr>';
            fiction_data += '<td>' + value.name + '</td>';
            fiction_data += '<td>' + value.Occupation + '</td>';
            fiction_data += '<td>' + value.age + '</td>';
            fiction_data += '<td>' + value.gender + '</td>';
            fiction_data += '<tr>';
        });
        console.log(fiction_data);
        $('#fiction_table').append(fiction_data);

    });


    $('#search').keyup(function () {
        search_table($(this).val());

    });

    function search_table(value) {
        $('#fiction_table tr').each(function () {
            let found = 'false';
            $(this).each(function () {
                if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                    found = 'true';
                }
            });
            if (found == 'true') {
                $(this).show();
                $(this).css("background-color", "yellow");
            }
            else {
                $(this).hide();
            }
        });

    }



});