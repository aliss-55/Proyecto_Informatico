<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
        rel="stylesheet">
</head>

<body>
    <div class="Container">
        <div class="LeftSide">
            <div class="Logo">
                <div class="Square"></div>
                <div class="Purple28">G</div>
            </div>
            <div class="Spacing35"></div>
            <div class="Black32">Inicio De Sesión</div>
            <div class="Gray16">¡Bienvenido! Por favor, inicia sesión para acceder a tu cuenta.</div>
            <div class="Spacing25"></div>
            <form action="includes\user-session.php" class="Form" method="post">
                <div class="FormGroup">
                    <div class="Black16Bold">Email</div>
                    <input class="Black16" type="email" name="Email" placeholder="Correo Electrónico" value="<?php if (isset($_COOKIE['Email'])) {
                        echo $_COOKIE['Email'];
                    } ?>" required />
                </div>
                <div class="FormGroup">
                    <div class="Frame1">
                        <div class="Black16Bold">Contraseña</div>
                        <div class="Purple16">Lupa Kata Sandi?</div>
                    </div>
                    <input class="Black16" type="password" name="Password" placeholder="Contraseña" value="<?php if (isset($_COOKIE['Password'])) {
                        echo $_COOKIE['Password'];
                    } ?>" required />
                </div>
                <div class="RememberMe">
                    <input type="checkbox" name="RememberMe" id="check1" <?php if (isset($_COOKIE["member_login"])) { ?>
                            checked <?php } ?> />
                    <label for="check1" class="Black16Bold">Recordarme</label>
                </div>
                <button class="Button"><span class="White16Bold">Iniciar Sesión</span></a></button>
            </form>
            <div class="Spacing35"></div>
            <div class="Register"><span class="Gray16Bold">BelumPunyaAkun?</span><span class="Purple16">aftarSekarang,
                    gratis!</span></div>
        </div>

        <div class="RightSide">
            <div class="Text1Rigth">NAMANYAJUGABELAJAR.IO</div>
            <div class="Text2Rigth">Belajar secara online semakin mudah – tetep belajar walaupun pake kuota dari
                Kemendikbud hehe~</div>
        </div>
    </div>
    </div>
</body>

</html>