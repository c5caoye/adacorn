let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let Schema = mongoose.Schema;

let departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    p: {
        type: String,
    },
    director: {
        type: String,
    },
    // members: {
    //     type: [],
    //     default: []
    // },
    code: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ''
    }
}, {
    collection: 'departments'
});

let notificationSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    collection: 'notifications'
});

let userNotificationSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    read: {
        type: "boolean",
        default: false,
        required: true
    },
}, {
    collection: 'userNotifications'
});

let eventSchema = new Schema({
    initiator: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    date: {
        type: "date",
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {
    collection: 'notifications'
});

let applicationSchema = new Schema({
    applicant: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    lastModified: {
        type: timestamp
    }
});

// Priority:
//     0: Applicant
//     1: Member
//     2: Dept Director
//     3: VP
//     4: P

let memberSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    firstNameEnglish: {
        type: String,
        required: true
    },
    chineseName: {
        type: String
    },
    stunum: {
        type: String,
        required: true,
        unique: true
    },
    wechat: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    preferredName: {
        type: String
    },
    profilePhoto: {
        type: String, default: undefined
    },
    email: {
        type: String,
        required: true
    },
    UTmail: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    department: {
        type: []
    },
    level: {
        type: "number", default: 0
    }
}, {
    collection: 'members'
});

memberSchema.plugin(passportLocalMongoose, {
    usernameField: 'UTmail'
});

mongoose.connect('mongodb://adacorntest:office5113@adacorn-shard-00-00-i8ikr.mongodb.net:27017,adacorn-shard-00-01-i8ikr.mongodb.net:27017,adacorn-shard-00-02-i8ikr.mongodb.net:27017/adacorndb?ssl=true&replicaSet=ADACORN-shard-0&authSource=admin');

let schema = {
    'Member': mongoose.model('Member', memberSchema),
    'Department': mongoose.model('Department', departmentSchema)
};
module.exports = schema;
