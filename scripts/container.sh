#! /bin/bash
SRC_DIR=${SRC_DIR:-`pwd`}
NAME=${NAME:-SPHINX}

# Build container for use of testing or notebook
if [[ $* == *--build* ]]; then
    echo "Building Docker Image"
    docker build \
        -t arviz \
        -f $SRC_DIR/scripts/Dockerfile \
        --build-arg SRC_DIR=. $SRC_DIR \
        --build-arg PYTHON_VERSION=${PYTHON_VERSION} \
        --build-arg PYSTAN_VERSION=${PYSTAN_VERSION} \
        --build-arg PYRO_VERSION=${PYRO_VERSION} \
        --build-arg PYTORCH_VERSION=${PYTORCH_VERSION} \
        --build-arg EMCEE_VERSION=${EMCEE_VERSION} \
        --build-arg TF_VERSION=${TF_VERSION} \
        --build-arg PYMC3_VERSION=${PYMC3_VERSION} \
        --build-arg NAME=${NAME}
fi


if [[ $* == *--clear-cache* ]]; then
    echo "Removing cached files and models"
    find -type d -name __pycache__ -exec rm -rf {} +
    rm -f arviz/tests/saved_models/*.pkl
fi


if [[ $* == *--shell* ]]; then
    echo "Starting Arviz Container Shell"
    docker run  -it --mount type=bind,source="$(pwd)",target=/opt/arviz --name arviz_shell --rm arviz:latest /bin/bash
fi

if [[ $* == *--sphinx-build* ]]; then
    echo "Build docs with sphinx"
    docker run  --mount type=bind,source="$(pwd)",target=/opt/arviz --name arviz_sphinx --rm arviz:latest bash -c \
    "if [ -d ./doc/build ]; then python -msphinx -M clean doc doc/build; fi && sphinx-build doc doc/build -b html"
fi


if [[ $* == *--test* ]]; then
    echo "Testing Arviz"
    docker run --mount type=bind,source="$(pwd)",target=/opt/arviz/ --rm arviz:latest bash -c \
                                      "NUMBA_DISABLE_JIT=1 pytest -v arviz/tests/ --cov=arviz/"
fi
