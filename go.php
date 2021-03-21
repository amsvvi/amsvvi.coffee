<?php
        $name = $_POST['nm'];
        $tel = $_POST['ph'];
        $from = 'no-reply@yandex.ru';
        $mailTo='mail@yandex.ru';
        $headers = "From: CoffeeLove <$from>\nReply-To: $from\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $message="
        <h1>Сообщение с сайта: хочу начать сотрудничество</h1>
        <p>Имя: $name</p>
        <p>Телефон: $tel</p>
        ";
        mail($mailTo,"Форма обратной связи",$message,$headers);
?>