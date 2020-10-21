CREATE PROCEDURE GetMD5Translate(
    @EncryptTranslateMD5 NVARCHAR(200)
)
AS 
BEGIN 
    SET NOCOUNT ON
    IF NOT EXISTS(Select * from DictionaryEncrypt Where EncryptTranslateMD5 = @EncryptTranslateMD5)
    BEGIN
       Select 'Translation Not Available' AS MessageError
    End
    ELSE
         Select Sentence from DictionaryEncrypt Where EncryptTranslateMD5 = @EncryptTranslateMD5
END