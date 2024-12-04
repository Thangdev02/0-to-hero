import React from 'react';
import ButtonComponents from '../components/ButtonComponents';

const Bai7Props = () => {
    // function greet(name, callback) {
    //     console.log("Xin chào, " + name);
    //     callback();  // Gọi hàm callback sau khi in lời chào
    //   }
      
    //   function sayGoodbye() {
    //     console.log("Tạm biệt!");
    //   }
      
    //   // Gọi hàm greet và truyền hàm sayGoodbye làm callback
    //   greet("Hannah", sayGoodbye);
      
    //components cha
    return (
        <div>
            <ButtonComponents text="Submit"  backgroundColor="red"/>
        </div>
    );
};

export default Bai7Props;