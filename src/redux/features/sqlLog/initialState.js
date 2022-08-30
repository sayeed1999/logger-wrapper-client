import QueryObject from '../../../models/QueryObject';

const initialState = {
    loading: false,
    data: [],
    error: '',
    pagination: {
        index: 1,
        size: 25,
        searchText: '',
    },
};

export default initialState;

export const dummy_logs =
[
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '17 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '16 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '16 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '16 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '16 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '16 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '16 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '16 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '16 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '15 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '14 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '14 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '14 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '14 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '14 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '14 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '14 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },      
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '12 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
    {
        datetime: '11 Aug 2022 18:10:23.777',
        queryObject: new QueryObject('1asdsad-12312-asdsad123', 'Metlife.PolicyAdmin.Api(Metlife.PolicyAdmin.Api)', 'PolicyNumber', 'Process', 14084, 'select * from dbo.Products P inner join dbo.Categories C on P.CategoryId = C.Id where @id = 991', '8000-fd000-ca9', 'Db', '/api/release/startRelease', 'Release', 'GetPolicy'),
    },
];