Create TABLE Users (
    Id INT IDENTITY PRIMARY KEY, 
    NameUser NVARCHAR(200) NOT NULL,
    LastName NVARCHAR(200) NOT NULL,
    Email NVARCHAR(50) NOT NULL,
    PasswordUser NVARCHAR(50) NOT NULL,
    Phone NVARCHAR(50) NOT NULL
)