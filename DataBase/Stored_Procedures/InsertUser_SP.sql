ALTER PROCEDURE InsertUser
    (
    @Name NVARCHAR(200),
    @LastName NVARCHAR(200),
    @Email NVARCHAR(50),
    @Password NVARCHAR(50),
    @Phone NVARCHAR(50))
AS
BEGIN
    SET NOCOUNT ON
    IF NOT EXISTS (SELECT Id from Users where Email = @Email)
        INSERT INTO Users
        OUTPUT
        inserted.Id
        VALUES
            (@Name, @LastName, @Email, @Password, @Phone)
    ELSE
       Select 'Ya existe un usuario con ese correo' AS MessageError
END