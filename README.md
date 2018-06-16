Vue Format Rut watch 
Use in Vue ^2.0
## usage:

´´´
<input-rut/>
´´´

´´´
<div class="form-group{{ $errors->has('rut') ? ' has-error' : '' }}">
    <label for="rut" class="col-md-4 control-label">Rut</label>

    <div class="col-md-6">
        <input-rut/>
        @if ($errors->has('rut'))
            <span class="help-block">
                <strong>{{ $errors->first('rut') }}</strong>
            </span>
        @endif
    </div>
</div>
´´´
