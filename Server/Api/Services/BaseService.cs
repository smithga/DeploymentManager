namespace Server.Api.Services {
    public class BaseService {

        protected const string DB_NAME = "Server.db";

        protected string TableName;

        public BaseService(string tableName) {
            TableName = tableName;
        }

    }

}
