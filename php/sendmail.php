<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $massage = $_POST['massage'];
    $services = $_POST['services'];

    switch($services){
        case 1:
            $services = 'Дизайн інтер’єра';
            break;
        case 2:
            $services = 'Ремонт комерційної нерухомості';
            break;
        case 3:
            $services = 'Виготовлення меблів';
            break;
        case 4:
            $services = 'Будівництво котеджів';
            break;
        case 5:
            $services = 'Ремонт квартир під ключ';
            break;
        case 6:
            $services = 'Опалення та вентиляція';
            break;
        case 7:
            $services = 'Будівництво бункерів';
            break;
        case 8:
            $services = 'Інше';
            break;
    }
        // Сообщение
    $message = "Им'я: $name\r\nТелефон: $phone\r\nПослуга: $services\r\nПовідомлення: $massage";
        // На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
    $message = wordwrap($message, 70, "\r\n");

    // Отправляем
    mail('nadiyna.stolytsya@gmail.com', 'Заявка', $message, 'Reply-To:'.$email.'');
?>