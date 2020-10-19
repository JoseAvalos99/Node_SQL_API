Create PROCEDURE DeleteUsers(
    @Id INT)
AS
BEGIN
    SET NOCOUNT ON
    Delete from Users OUTPUT deleted.Id where Id = @Id
END