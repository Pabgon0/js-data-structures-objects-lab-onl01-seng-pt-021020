const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue() {
  return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey() {
  
}

function destructivelyDeleteFromDriverByKey() {
  
}