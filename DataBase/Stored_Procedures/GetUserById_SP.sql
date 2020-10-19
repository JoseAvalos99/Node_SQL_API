CREATE PROCEDURE GetUserById
    (
    @Id Int)
AS
BEGIN
    SET NOCOUNT ON
    Select *
    from Users
    Where Id = @IdEND