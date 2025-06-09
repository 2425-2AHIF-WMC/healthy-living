// FormatMovements class for model path management
class FormatMovements {
    constructor() {
        this.movements = [
            '../movements/boxing.glb',
            '../movements/shadowboxing.glb',
            '../movements/heavybag.glb',
            '../movements/pikeWalk.glb',
            '../movements/pushUps.glb',
            '../movements/boxing.glb',
            '../movements/circleChrunch.glb',
            '../movements/plank1.glb',
            '../movements/bicycleCrunch.glb',
            '../movements/burpee.glb',
            '../movements/jumpingJacksglb.glb',
            '../movements/crossJumpRotation.glb',
            '../movements/squad.glb',
            '../movements/sumoHighPull.glb',
            '../movements/backSquad.glb',
            '../movements/neckStretching.glb',
            '../movements/armStretch.glb'
        ];
    }

    getMovement(exerciseType = null) {
        if (exerciseType) {
            const exerciseMap = {
                // Upper body exercises
                'pikewalk': '../movements/pikeWalk.glb',
                'pushup': '../movements/pushUps.glb',
                'boxing': '../movements/boxing.glb',

                // Core exercises
                'circlecrunches': '../movements/circleChrunch.glb',
                'plank': '../movements/plank1.glb',
                'bicyclecrunch': '../movements/bicycleCrunch.glb',

                // Cardio exercises
                'burpee': '../movements/burpee.glb',
                'jumpingjacks': '../movements/jumpingJacksglb.glb',
                'crossjumprotation': '../movements/crossJumpRotation.glb',

                // Lower body exercises
                'squats': '../movements/squad.glb',
                'sumohighpull': '../movements/sumoHighPull.glb',
                'backsquat': '../movements/backSquad.glb',

                // Stretching exercises
                'neckstretch': '../movements/neckStretching.glb',
                'armstretch': '../movements/armStretch.glb'
            };
            return exerciseMap[exerciseType] || this.movements[0];
        }

        // Return random movement if no specific type requested
        return this.movements[Math.floor(Math.random() * this.movements.length)];
    }
}

// Muscle information database
const muscleInfo = {
    'arms': {
        name: 'Arms',
        description: 'Includes biceps, triceps, and forearm muscles. Essential for pulling and pushing movements.'
    },
    'shoulders': {
        name: 'Shoulder Muscles (Deltoids)',
        description: 'Triangular shoulder muscle with three heads. Controls shoulder movements in all directions.'
    },
    'core': {
        name: 'Core Muscles',
        description: 'Group of muscles including abs, obliques, and deep stabilizers. Essential for posture and stability.'
    },
    'cardio': {
        name: 'Cardiovascular System',
        description: 'Exercises that improve heart health, endurance, and overall cardiovascular fitness.'
    },
    'hamstrings': {
        name: 'Hamstring Muscles',
        description: 'Three muscles at the back of the thigh that flex the knee and extend the hip.'
    },
    'chest': {
        name: 'Pectoralis Major',
        description: 'Large fan-shaped muscle covering the chest. Primary muscle for pushing movements.'
    },
    'triceps': {
        name: 'Triceps Brachii',
        description: 'Three-headed muscle on the back of the upper arm. Extends the elbow and assists in shoulder extension.'
    },
    'abs': {
        name: 'Abdominal Muscles',
        description: 'The abdominal muscles include the rectus abdominis. They provide core stability and trunk flexion.'
    },
    'hip-flexors': {
        name: 'Hip Flexor Muscles',
        description: 'Group of muscles that lift the thighs toward the abdomen. Important for running and climbing.'
    },
    'glutes': {
        name: 'Gluteus Maximus',
        description: 'Largest muscle in the body. Powers hip extension and provides stability during movement.'
    },
    'obliques': {
        name: 'Oblique Muscles',
        description: 'Side abdominal muscles that control trunk rotation and lateral flexion.'
    },
    'full-body': {
        name: 'Full Body',
        description: 'Exercise engages multiple muscle groups throughout the entire body for maximum efficiency.'
    },
    'cardiovascular': {
        name: 'Cardiovascular System',
        description: 'Exercises that improve heart health, endurance, and overall cardiovascular fitness.'
    },
    'calves': {
        name: 'Gastrocnemius & Soleus',
        description: 'Calf muscles that plantarflex the foot and help with walking and running.'
    },
    'legs': {
        name: 'Leg Muscles',
        description: 'Includes quadriceps, hamstrings, and calf muscles. Essential for lower body strength and mobility.'
    },
    'quadriceps': {
        name: 'Quadriceps Femoris',
        description: 'Four muscles at the front of the thigh that extend the knee and flex the hip.'
    },
    'power': {
        name: 'Power Training',
        description: 'Exercises focused on developing explosive strength and power output.'
    },
    'flexibility': {
        name: 'Flexibility',
        description: 'Range of motion in joints and muscles. Important for injury prevention and mobility.'
    },
    'balance': {
        name: 'Balance',
        description: 'Ability to maintain stability and control during movement and static positions.'
    },
    'spine': {
        name: 'Spinal Muscles',
        description: 'Muscles that support and move the spine. Important for posture and back health.'
    },
    'ankles': {
        name: 'Ankle Muscles',
        description: 'Muscles that control ankle movement and provide stability during standing and walking.'
    },
    'biceps': {
        name: 'Biceps Brachii',
        description: 'Two-headed muscle in the upper arm that flexes the elbow and supinates the forearm.'
    },
    'forearms': {
        name: 'Forearm Muscles',
        description: 'Muscles that control wrist and finger movements. Important for grip strength.'
    }
};

// Exercise configurations matching HTML exercises
const exerciseConfigs = {
    // Upper body exercises
    'pikewalk': {
        muscles: ['shoulders', 'core', 'hamstrings'],
        primaryMuscle: 'shoulders'
    },
    'pushup': {
        muscles: ['chest', 'triceps', 'shoulders'],
        primaryMuscle: 'chest'
    },
    'boxing': {
        muscles: ['triceps', 'chest', 'shoulders'],
        primaryMuscle: 'triceps'
    },

    // Core exercises
    'circlecrunches': {
        muscles: ['abs', 'hip-flexors'],
        primaryMuscle: 'abs'
    },
    'plank': {
        muscles: ['core', 'shoulders', 'glutes'],
        primaryMuscle: 'core'
    },
    'bicyclecrunch': {
        muscles: ['abs', 'obliques'],
        primaryMuscle: 'abs'
    },

    // Cardio exercises
    'burpee': {
        muscles: ['full-body', 'cardiovascular'],
        primaryMuscle: 'full-body'
    },
    'jumpingjacks': {
        muscles: ['cardiovascular', 'calves', 'shoulders'],
        primaryMuscle: 'cardiovascular'
    },
    'crossjumprotation': {
        muscles: ['core', 'cardio', 'shoulders'],
        primaryMuscle: 'core'
    },

    // Lower body exercises
    'squats': {
        muscles: ['quadriceps', 'glutes', 'hamstrings'],
        primaryMuscle: 'quadriceps'
    },
    'sumohighpull': {
        muscles: ['quadriceps', 'glutes', 'calves'],
        primaryMuscle: 'quadriceps'
    },
    'backsquat': {
        muscles: ['calves', 'ankles'],
        primaryMuscle: 'calves'
    },

    // Stretching exercises
    'neckstretch': {
        muscles: ['flexibility', 'balance', 'full-body'],
        primaryMuscle: 'flexibility'
    },
    'armstretch': {
        muscles: ['hamstrings', 'calves', 'spine'],
        primaryMuscle: 'hamstrings'
    }
};

// Store all exercise instances
const exerciseInstances = {};

// Category filtering functionality
window.filterCategory = function(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Show/hide categories
    document.querySelectorAll('.exercise-category').forEach(cat => {
        if (category === 'all' || cat.dataset.category === category) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
};

// Initialize all exercise animations
function initializeExercises() {
    const exercises = Object.keys(exerciseConfigs);
    exercises.forEach(exercise => {
        initializeExercise(exercise);
    });
}

function initializeExercise(exerciseId) {
    const container = document.getElementById(`animation-container-${exerciseId}`);
    const canvas = document.getElementById(`c-${exerciseId}`);
    const infoPanel = document.getElementById(`info-panel-${exerciseId}`);
    const muscleName = document.getElementById(`muscle-name-${exerciseId}`);
    const muscleDescription = document.getElementById(`muscle-description-${exerciseId}`);

    if (!container || !canvas) {
        console.warn(`Container or canvas not found for ${exerciseId}`);
        return;
    }

    const config = exerciseConfigs[exerciseId];
    const instance = new ExerciseAnimation(container, canvas, infoPanel, muscleName, muscleDescription, config, exerciseId);
    exerciseInstances[exerciseId] = instance;
}

// Enhanced Exercise Animation Class with GLTF Support
class ExerciseAnimation {
    constructor(container, canvas, infoPanel, muscleName, muscleDescription, config, exerciseId) {
        this.container = container;
        this.canvas = canvas;
        this.infoPanel = infoPanel;
        this.muscleName = muscleName;
        this.muscleDescription = muscleDescription;
        this.config = config;
        this.exerciseId = exerciseId;

        this.scene = null;
        this.renderer = null;
        this.camera = null;
        this.model = null;
        this.mixer = null;
        this.clock = new THREE.Clock();
        this.raycaster = new THREE.Raycaster();
        this.currentlyAnimating = false;
        this.animationId = null;
        this.possibleAnims = [];
        this.idle = null;
        this.neck = null;
        this.waist = null;

        // Initialize FormatMovements for this exercise
        this.formatMovements = new FormatMovements();

        this.init();
    }

    init() {
        const containerWidth = this.container.clientWidth;
        const containerHeight = this.container.clientHeight;
        const backgroundColor = 0xf1f1f1;

        // Initialize scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(backgroundColor);
        this.scene.fog = new THREE.Fog(backgroundColor, 60, 100);

        // Initialize renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(containerWidth, containerHeight);

        // Initialize camera
        this.camera = new THREE.PerspectiveCamera(
            50,
            containerWidth / containerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, -5, 18);

        // Load model
        this.loadModel();
        this.setupLights();
        this.setupFloor();
        this.setupEventListeners();
        this.animate();
    }

    loadModel() {
        // Get the model path for this specific exercise
        const MODEL_PATH = this.formatMovements.getMovement(this.exerciseId);
        console.log(`Loading model for ${this.exerciseId}: ${MODEL_PATH}`);

        // Show loader if available
        const loaderAnim = document.getElementById(`js-loader-${this.exerciseId}`);
        if (loaderAnim) {
            loaderAnim.style.display = 'block';
        }

        // Load GLTF model
        // Replace this line:
        const loader = new THREE.GLTFLoader();
        loader.load(
            MODEL_PATH,
            (gltf) => this.onModelLoaded(gltf, loaderAnim),
            (xhr) => {
                console.log(`${this.exerciseId}: ${(xhr.loaded / xhr.total * 100)}% loaded`);
            },
            (error) => {
                console.error(`Error loading model for ${this.exerciseId}:`, error);
                this.createFallbackModel();
                if (loaderAnim) {
                    loaderAnim.style.display = 'none';
                }
            }
        );
    }

    onModelLoaded(gltf, loaderAnim) {
        this.model = gltf.scene;
        let fileAnimations = gltf.animations;

        console.log(`Model loaded successfully for ${this.exerciseId}!`);

        // Process model meshes and bones
        this.model.traverse(o => {
            if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;
                this.setupMeshMaterial(o);
                this.assignMuscleRegion(o);
            }

            // Find bones for head tracking
            if (o.isBone) {
                if (o.name.toLowerCase().includes('neck')) {
                    this.neck = o;
                }
                if (o.name.toLowerCase().includes('spine')) {
                    this.waist = o;
                }
            }
        });

        // Scale and position model
        this.model.scale.set(7, 7, 7);
        this.model.position.y = -11;
        this.scene.add(this.model);

        // Hide loader
        if (loaderAnim) {
            loaderAnim.style.display = 'none';
        }

        // Set up animations
        this.setupAnimations(fileAnimations);
    }

    setupMeshMaterial(mesh) {
        if (mesh.material) {
            if (mesh.material.isMeshStandardMaterial || mesh.material.isMeshPhongMaterial) {
                mesh.material.needsUpdate = true;
            } else {
                const originalColor = mesh.material.color || new THREE.Color(0xffffff);
                const originalMap = mesh.material.map;

                mesh.material = new THREE.MeshPhongMaterial({
                    color: originalColor,
                    map: originalMap,
                    skinning: mesh.material.skinning || (mesh.isSkinnedMesh ? true : false)
                });
            }
        } else {
            mesh.material = new THREE.MeshPhongMaterial({
                color: 0xcccccc,
                skinning: mesh.isSkinnedMesh ? true : false
            });
        }
    }

    assignMuscleRegion(mesh) {
        const name = mesh.name.toLowerCase();

        if (name.includes('head')) {
            mesh.userData.muscleRegion = 'head';
        } else if (name.includes('neck')) {
            mesh.userData.muscleRegion = 'neck';
        } else if (name.includes('chest') || name.includes('torso')) {
            mesh.userData.muscleRegion = 'chest';
        } else if (name.includes('abdomen') || name.includes('belly')) {
            mesh.userData.muscleRegion = 'abdomen';
        } else if (name.includes('arm') || name.includes('bicep')) {
            mesh.userData.muscleRegion = 'biceps';
        } else if (name.includes('shoulder')) {
            mesh.userData.muscleRegion = 'shoulders';
        } else if (name.includes('back')) {
            mesh.userData.muscleRegion = 'back';
        } else if (name.includes('thigh') || name.includes('leg')) {
            mesh.userData.muscleRegion = 'quadriceps';
        } else if (name.includes('calf')) {
            mesh.userData.muscleRegion = 'calves';
        } else {
            // Default to primary muscle of the exercise
            mesh.userData.muscleRegion = this.config.primaryMuscle;
        }
    }

    setupAnimations(fileAnimations) {
        if (fileAnimations && fileAnimations.length > 0) {
            this.mixer = new THREE.AnimationMixer(this.model);

            // Set up exercise animations
            let clips = fileAnimations.filter(val => !val.name.toLowerCase().includes('idle'));
            this.possibleAnims = clips.map(val => {
                let clip = THREE.AnimationClip.findByName(clips, val.name);
                clip = this.mixer.clipAction(clip);
                return clip;
            });

            // Set up idle animation
            let idleAnim = THREE.AnimationClip.findByName(fileAnimations, 'idle') || fileAnimations[0];
            if (idleAnim) {
                this.idle = this.mixer.clipAction(idleAnim);
                this.idle.play();
            }
        }
    }

    createFallbackModel() {
        const group = new THREE.Group();

        // Create materials based on muscle groups
        const materials = {
            chest: new THREE.MeshLambertMaterial({ color: 0xff6b6b }),
            shoulders: new THREE.MeshLambertMaterial({ color: 0x4ecdc4 }),
            lats: new THREE.MeshLambertMaterial({ color: 0x45b7d1 }),
            biceps: new THREE.MeshLambertMaterial({ color: 0x96ceb4 }),
            triceps: new THREE.MeshLambertMaterial({ color: 0xfeca57 }),
            quadriceps: new THREE.MeshLambertMaterial({ color: 0xa8e6cf }),
            hamstrings: new THREE.MeshLambertMaterial({ color: 0xff8b94 }),
            glutes: new THREE.MeshLambertMaterial({ color: 0xc7ceea }),
            calves: new THREE.MeshLambertMaterial({ color: 0xffd93d }),
            core: new THREE.MeshLambertMaterial({ color: 0x6c5ce7 }),
            default: new THREE.MeshLambertMaterial({ color: 0xffdbac })
        };

        // Determine primary color based on exercise
        const primaryMuscle = this.config.primaryMuscle;
        const primaryColor = materials[primaryMuscle] || materials.default;

        // Create basic human figure (same as before)
        this.createBasicHumanFigure(group, materials, primaryColor);

        group.scale.set(1.8, 1.8, 1.8);
        group.position.y = -3;
        this.scene.add(group);
        this.model = group;

        // Add simple animation
        this.addSimpleAnimation();
    }

    createBasicHumanFigure(group, materials, primaryColor) {
        // Head
        const headGeometry = new THREE.SphereGeometry(1.2, 16, 16);
        const head = new THREE.Mesh(headGeometry, materials.default);
        head.position.y = 6;
        head.userData.muscleRegion = 'head';
        group.add(head);

        // Torso (chest)
        const torsoGeometry = new THREE.BoxGeometry(3, 4, 1.5);
        const torso = new THREE.Mesh(torsoGeometry,
            this.config.muscles.includes('chest') ? primaryColor : materials.default);
        torso.position.y = 2;
        torso.userData.muscleRegion = 'chest';
        group.add(torso);

        // Continue with other body parts...
        // (Rest of the fallback model creation code remains the same)
    }

    setupLights() {
        // Hemisphere light
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
        hemiLight.position.set(0, 50, 0);
        this.scene.add(hemiLight);

        // Directional light
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(-8, 12, 8);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 50;
        this.scene.add(dirLight);

        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        this.scene.add(ambientLight);
    }

    setupFloor() {
        const floorGeometry = new THREE.PlaneGeometry(20, 20);
        const floorMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.1
        });

        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -8;
        floor.receiveShadow = true;
        this.scene.add(floor);
    }

    setupEventListeners() {
        // Mouse/touch interaction
        this.canvas.addEventListener('click', (e) => this.handleInteraction(e));
        this.canvas.addEventListener('touchend', (e) => this.handleInteraction(e, true));

        // Mouse movement for head tracking
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));

        // Hover effects
        this.container.addEventListener('mouseenter', () => {
            if (this.infoPanel) {
                this.infoPanel.classList.add('active');
            }
        });

        this.container.addEventListener('mouseleave', () => {
            if (this.infoPanel) {
                this.infoPanel.classList.remove('active');
            }
        });
    }

    handleMouseMove(e) {
        if (this.neck && this.waist) {
            const rect = this.canvas.getBoundingClientRect();
            const mouseCoords = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            this.moveJoint(mouseCoords, this.neck, 50);
            this.moveJoint(mouseCoords, this.waist, 30);
        }
    }

    moveJoint(mouse, joint, degreeLimit) {
        const rect = this.canvas.getBoundingClientRect();
        let degrees = this.getMouseDegrees(mouse.x, mouse.y, degreeLimit, rect.width, rect.height);
        joint.rotation.y = THREE.MathUtils.degToRad(degrees.x);
        joint.rotation.x = THREE.MathUtils.degToRad(degrees.y);
    }

    getMouseDegrees(x, y, degreeLimit, width, height) {
        let dx = 0, dy = 0, xdiff, xPercentage, ydiff, yPercentage;

        if (x <= width / 2) {
            xdiff = width / 2 - x;
            xPercentage = (xdiff / (width / 2)) * 100;
            dx = ((degreeLimit * xPercentage) / 100) * -1;
        }

        if (x >= width / 2) {
            xdiff = x - width / 2;
            xPercentage = (xdiff / (width / 2)) * 100;
            dx = (degreeLimit * xPercentage) / 100;
        }

        if (y <= height / 2) {
            ydiff = height / 2 - y;
            yPercentage = (ydiff / (height / 2)) * 100;
            dy = (((degreeLimit * 0.5) * yPercentage) / 100) * -1;
        }

        if (y >= height / 2) {
            ydiff = y - height / 2;
            yPercentage = (ydiff / (height / 2)) * 100;
            dy = (degreeLimit * yPercentage) / 100;
        }
        return { x: dx, y: dy };
    }

    handleInteraction(e, touch = false) {
        e.preventDefault();

        const rect = this.canvas.getBoundingClientRect();
        const mouse = new THREE.Vector2();

        if (touch && e.changedTouches) {
            const clientX = e.changedTouches[0].clientX;
            const clientY = e.changedTouches[0].clientY;
            mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
        } else {
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        }

        this.raycaster.setFromCamera(mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (object.userData && object.userData.muscleRegion) {
                this.showMuscleInfo(object.userData.muscleRegion);
            }
            this.playClickAnimation();
        }
    }

    showMuscleInfo(muscleRegion) {
        const info = muscleInfo[muscleRegion];
        if (info && this.muscleName && this.muscleDescription) {
            this.muscleName.textContent = info.name;
            this.muscleDescription.textContent = info.description;
            if (this.infoPanel) {
                this.infoPanel.classList.add('active');
            }
        }
    }

    playClickAnimation() {
        if (this.currentlyAnimating || !this.model) return;

        // If we have GLTF animations, play them
        if (this.possibleAnims && this.possibleAnims.length > 0) {
            this.currentlyAnimating = true;
            let anim = Math.floor(Math.random() * this.possibleAnims.length);
            this.playModifierAnimation(this.idle, 0.25, this.possibleAnims[anim], 0.25);
            return;
        }

        // Otherwise, play simple click animation
        this.currentlyAnimating = true;
        const originalScale = this.model.scale.clone();
        const originalRotation = this.model.rotation.clone();

        const duration = 500;
        const startTime = Date.now();

        const animateClick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            if (progress < 0.3) {
                const scale = 1 + (easeProgress * 0.15);
                this.model.scale.setScalar(originalScale.x * scale);
            } else if (progress < 0.7) {
                this.model.rotation.y = originalRotation.y + (Math.sin(easeProgress * Math.PI * 4) * 0.1);
            } else {
                const scale = 1.15 - ((easeProgress - 0.7) / 0.3) * 0.15;
                this.model.scale.setScalar(originalScale.x * scale);
            }

            if (progress < 1) {
                requestAnimationFrame(animateClick);
            } else {
                this.model.scale.copy(originalScale);
                this.model.rotation.copy(originalRotation);
                this.currentlyAnimating = false;
            }
        };

        animateClick();
    }

    playModifierAnimation(from, fSpeed, to, tSpeed) {
        to.setLoop(THREE.LoopOnce);
        to.reset();
        to.play();
        if (from) {
            from.crossFadeTo(to, fSpeed, true);
        }
        setTimeout(() => {
            if (from) {
                from.enabled = true;
                to.crossFadeTo(from, tSpeed, true);
            }
            this.currentlyAnimating = false;
        }, to._clip.duration * 1000 - ((tSpeed + fSpeed) * 1000));
    }

    addSimpleAnimation() {
        if (!this.model) return;

        const originalY = this.model.position.y;
        let time = 0;

        const animateModel = () => {
            if (this.model && !this.currentlyAnimating) {
                time += 0.01;
                this.model.position.y = originalY + Math.sin(time) * 0.1;
                this.model.rotation.y = Math.sin(time * 0.5) * 0.02;
            }
        };

        this.modelAnimation = animateModel;
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        // Update mixer if exists
        if (this.mixer) {
            this.mixer.update(this.clock.getDelta());
        }

        // Update model animation
        if (this.modelAnimation) {
            this.modelAnimation();
        }

        // Handle resize
        this.handleResize();

        // Render
        this.renderer.render(this.scene, this.camera);
    }

    handleResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        if (this.canvas.width !== width * window.devicePixelRatio ||
            this.canvas.height !== height * window.devicePixelRatio) {
            this.renderer.setSize(width, height, false);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        }
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
        }
        if (this.scene) {
            this.scene.clear();
        }
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExercises);
} else {
    initializeExercises();
}

// Handle window resize
window.addEventListener('resize', () => {
    Object.values(exerciseInstances).forEach(instance => {
        if (instance && instance.handleResize) {
            instance.handleResize();
        }
    });
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {Object.values(exerciseInstances).forEach(instance => {
    if (instance && instance.destroy) {
        instance.destroy();
    }
});
});

// Export for external access
window.ExerciseLibrary = {
    instances: exerciseInstances,
    FormatMovements: FormatMovements,
    muscleInfo: muscleInfo,
    exerciseConfigs: exerciseConfigs,
    filterCategory: window.filterCategory,
    reinitializeExercise: (exerciseId) => {
        if (exerciseInstances[exerciseId]) {
            exerciseInstances[exerciseId].destroy();
            delete exerciseInstances[exerciseId];
        }
        initializeExercise(exerciseId);
    },
    getAllExercises: () => Object.keys(exerciseConfigs),
    getExerciseInfo: (exerciseId) => ({
        config: exerciseConfigs[exerciseId],
        muscles: exerciseConfigs[exerciseId]?.muscles.map(muscle => muscleInfo[muscle]) || []
    })
};

// Auto-pause animations when page is not visible
document.addEventListener('visibilitychange', () => {
    Object.values(exerciseInstances).forEach(instance => {
        if (instance && instance.mixer) {
            if (document.hidden) {
                instance.mixer.timeScale = 0;
            } else {
                instance.mixer.timeScale = 1;
            }
        }
    });
});

console.log('Enhanced Exercise Library initialized with GLTF support');
