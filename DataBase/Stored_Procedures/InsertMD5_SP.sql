CREATE PROCEDURE InsertMD5 (
    @Sentence NVARCHAR(200),
    @EncryptTranslateMD5 NVARCHAR(50)
)
AS 
BEGIN
    SET NOCOUNT ON 
    IF NOT EXISTS(Select * from DictionaryEncrypt Where Sentence = @Sentence)
        INSERT INTO DictionaryEncrypt
        OUTPUT 
        inserted.EncryptTranslateMD5
        VALUES (@Sentence, @EncryptTranslateMD5)
    ELSE
       Select EncryptTranslateMD5 from DictionaryEncrypt Where Sentence = @Sentence
END
