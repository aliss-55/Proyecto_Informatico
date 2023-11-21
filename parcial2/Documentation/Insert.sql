INSERT INTO
    `users` (user, email, password)
VALUES
    (
        'user',
        'user@gmail.com',
        '$2b$10$8L3BQ.UBgk10BFLGwrlUn.4.Cw3jEA0wD9FWQdo9k3aG.oNa4K.US'
    ),
    (
        'pablo',
        'pablo.cardona@gmail.com',
        '$2b$10$LH8NrqJ/UgUP/IGkV/ib3.2FNAHS.wooATj6kfLL45gs602EdsxCS'
    );

INSERT INTO 
    `tasks` (`id`, `title`, `description`, `status`) 
VALUES
    (
        1, 
        'Funcionalidad Task', 
        'Completar la funcionalidad de las tareas', 
        'Pendin'
    ),
    (
        2, 
        'Javo', 
        'Entender la Conexion del fronted con el backend', 
        'Done'
    );