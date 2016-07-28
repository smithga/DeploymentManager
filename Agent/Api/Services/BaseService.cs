namespace Agent.Api.Services {

    public class BaseService {

        protected const string DB_NAME = "Agent.db";

        protected string TableName;

        public BaseService(string tableName) {
            TableName = tableName;
        }

    }

}
