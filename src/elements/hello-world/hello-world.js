/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import ToasterInstance from '../../scripts/libs/Toaster';

/**
 * Takes the audio from getUserMedia and processes it to figure out how well
 * it maps to the strings of a guitar.
 *
 * Big thanks to Chris Wilson (@cwilso) for code and assistance.
 */
class HelloWorld {

  constructor () {
    // Defer normal constructor behavior to created because we're only
    // allowed to take the prototype with us from the class.
    Polymer(HelloWorld.prototype);
  }

  get is () {
    return 'hello-world';
  }

  created () {
    // Created entry point
  }

  attached () {
    // Attached entry point
    ToasterInstance().then((toaster) => {
      toaster.toast('Ohaiiii world!');
    });
  }

  detached () {
    // Detached entry point
  }

}

new HelloWorld();
