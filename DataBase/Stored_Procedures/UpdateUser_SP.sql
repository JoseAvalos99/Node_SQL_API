CREATE PROCEDURE EditUser(
    @Id int,
    @Name NVARCHAR(200),
    @LastName NVARCHAR(200),
    @Email NVARCHAR(50),
    @Password NVARCHAR(50),
    @Phone NVARCHAR(50))
AS
BEGIN
    SET NOCOUNT ON
    UPDATE Users 
    set NameUser = @Name,     
        LastName = @LastName,    
        Email = @Email,   
        PasswordUser = @Password,    
        Phone = @Phone    
        WHERE Id = @Id
    SELECT *
    from Users
    Where Id = @Id
END