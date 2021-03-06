const userModel = require('./userModel');

exports.getAll = function() {
    return new Promise((resolve, reject) => {
        userModel.find({}, function(err, users) {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        })
    });
}
exports.getById = function(id) {
    return new Promise((resolve,reject) => {
        userModel.findById(id, function(err,user) {
            if(err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}
exports.create = function(userData) {
    return new Promise((resolve, reject) => {
        let newUser = new userModel({
            name: userData.name,
            email: userData.email,
            street: userData.street,
            city: userData.city,
            zipcode: userData.zipcode,
            tasks: userData.tasks,
            posts: userData.posts
        });

        newUser.save(function(err) {
            if (err) {
                reject(err);
            } else {
                resolve('User created successfully!');
            }
        });
    });
}
exports.update = function(id,userData)
{
    return new Promise((resolve,reject) => {
        userModel.findByIdAndUpdate(id,
            {
                name: userData.name,
                email: userData.email,
                street: userData.street,
                city: userData.city,
                zipcode: userData.zipcode,
                tasks: userData.tasks,
                posts: userData.posts
            }, function(err)
            {
                if(err) {
                    reject(err)
                } else {
                    resolve('User updated successfully!')
                }
            });
    });
}

exports.delete = function(id) {
    return new Promise((resolve,reject) => {
        userModel.findByIdAndDelete(id, function(err) {
                if(err) {
                    reject(err);
                } else {
                    resolve('User deleted successfully!');
                }
            });    
    });
}