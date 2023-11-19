-- Insertar datos en la tabla 'users'
use askapp;
INSERT INTO users ([user], email, [password])
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

-- Insertar datos en la tabla 'tasks'
INSERT INTO dbo.tasks (title, description, status)
VALUES
    (
        'Funcionalidad Task',
        'Completar la funcionalidad de las tareas',
        'Pendin'
    ),
    (
        'Javo',
        'Entender la Conexion del fronted con el backend',
        'Done'
    );