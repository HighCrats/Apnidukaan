import Staff from "../model/staff.model.js";

export const addStaff = async (request, response, next) => {
    const { name, phone } = request.body;
    const email = request.params.email;
    Staff.findOne({ email }, (err, deliveryStaff) => {
        if (err) {
            return response.status(500).send(err);
        }
        if (deliveryStaff) {
            return response.status(409).send('Delivery staff already exists with that email');
        }
        const newDeliveryStaff = new Staff({
            name,
            email,
            phone
        });
        newDeliveryStaff.save((err, result) => {
            if (err) {
                return response.status(500).send(err);
            }
            response.send(result);
        });
    });
}

export const saveAllStaff = async (request, response, next) => {
    const { name, email, contact, address } = request.body;
    const deliveryStaff = new Staff({
        name, email, contact, address
    });
    deliveryStaff.save((err, result) => {
        if (err) { return response.status(500).send(err); }
        response.send(result);
    });
}

export const getListOfStaff = async (request, response, next) => {
    try {
        const staff = await Staff.find();
        response.json(products);
    } catch (err) {
        console.error(err.message);
        response.status(500).send(' Internal Server Error');
    }

}

export const updateStaff = async (request, response, next) => {
    const email = request.params.email;
    const { name, contact, address } = request.body;
    Staff.updateOne(
        { email },
        { name, contact, address },
        { new: true },
        function (err, staff) {
            if (err) {
                return response.status(500).send(err);
            }
            if (!staff) {
                return response.status(404).send('Delivery staff member not found');
            }
            return response.send(staff);
        }
    );
}

export const removeStaff = async (request, response, next) => {

    const email = request.params.email;
    Staff.deleteOne({ email }, (err, deletedDeliveryStaff) => {
        if (err) {
            return response.status(500).send(err);
        }
        if (!deletedDeliveryStaff) {
            return response.status(404).send('Delivery staff member not found');
        }
        response.send(deletedDeliveryStaff);
    });
}