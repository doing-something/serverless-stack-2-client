const dev = {
    s3: {
        REGION: 'ap-northeast-2',
        BUCKET: 'notes-app-2-api-dev-attachmentsbucket-ccotmh9dim1d'
    },
    apiGateway: {
        REGION: 'ap-northeast-2',
        URL: 'https://850dr4030j.execute-api.ap-northeast-2.amazonaws.com/dev'
    },
    cognito: {
        REGION: 'ap-northeast-2',
        USER_POOL_ID: 'ap-northeast-2_eULRByH49',
        APP_CLIENT_ID: '7aq93l05i2jin76qh2jg7pkhc4',
        IDENTITY_POOL_ID: 'ap-northeast-2:686ffcba-40e5-4e26-be37-6b70c505f554'
    }
};

const prod = {
    s3: {
        REGION: 'ap-northeast-2',
        BUCKET: 'notes-app-2-api-prod-attachmentsbucket-1wcf7vhuom7m5'
    },
    apiGateway: {
        REGION: 'ap-northeast-2',
        URL: 'https://k7frbd0eni.execute-api.ap-northeast-2.amazonaws.com/prod'
    },
    cognito: {
        REGION: 'ap-northeast-2',
        USER_POOL_ID: 'ap-northeast-2_L4nENC3gR',
        APP_CLIENT_ID: 'qcn99eravqpr4suc8io2i1vb7',
        IDENTITY_POOL_ID: 'ap-northeast-2:d244931f-b6d3-4fcb-b273-86e96d1e6391'
    }
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
