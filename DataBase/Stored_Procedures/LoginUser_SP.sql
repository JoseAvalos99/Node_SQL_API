Alter PROCEDURE LoginUser
    (
    @Email NVARCHAR(100),
    @Password NVARCHAR(200)
)
AS
BEGIN
    SET NOCOUNT ON
    IF EXISTS (SELECT * FROM Users WHERE Email = @Email and PasswordUser = @Password)
    BEGIN
        SELECT * FROM Users WHERE Email = @Email and PasswordUser = @Password
    END
    IF EXISTS (SELECT * FROM Users Where Email = @Email and PasswordUser <> @Password)
    BEGIN
       Select 'La contraseña es incorrecta' AS MessageError
    End    
    ELSE
    BEGIN
        Select 'No se ha registrado ese correo' AS MessageError
    END
END