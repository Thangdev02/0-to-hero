import React from 'react';
import config from '../common/configValue';



const Bai5Config = () => {
    // Truy cập màu sắc
console.log(config.colors.primary);  // Output: #3498db

// Truy cập thông báo lỗi
console.log(config.errors.commandNotFound);  // Output: Error: Command not found.

    return (
        <div style={{ backgroundColor: config.colors.primary }}>
            <h1 style={{ color: config.colors.secondary }}>Hello World</h1>
            <button style={{ backgroundColor: config.colors.success }}>
                Simulate Error
            </button>
            <button style={{ backgroundColor: config.colors.success }}>
                Simulate Error
            </button>
        </div>
    );
};

export default Bai5Config;